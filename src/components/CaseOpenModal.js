//i still have a road to go. This page is cooperated with Gemini.

import React, { useState, useEffect, useMemo, useRef } from "react";
import { Modal } from "@mui/material";
import { useRouter } from "next/navigation";

const spinSoundUrl = "/sounds/spin.mp3"; // roulette sound
const winSoundUrl = "/sounds/success.mp3"; // Ow yeah sound

function CaseWinModal({ winningItem, handleCloseWinModal }) {
  const winAudioRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    winAudioRef.current = new Audio(winSoundUrl);

    // Playin the audio
    const playPromise = winAudioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch((e) => {
        if (e.name !== "AbortError") {
          console.error("Win audio play failed:", e);
        }
      });
    }

    return () => {
      if (winAudioRef.current && !winAudioRef.current.paused) {
        winAudioRef.current.pause();
        winAudioRef.current = null;
      }
    };
  }, []); // Empty array, runs once when modal mounts

  if (!winningItem) return null;

  const itemImage =
    winningItem && winningItem.image
      ? winningItem.image
      : getPlaceholderImage(winningItem.name);

  if (winningItem.id === 15) {
    setTimeout(() => {
      router.push("/14-cmd");
    }, 1000);
  }

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center">
      <h2 className="text-3xl font-bold text-green-400 mb-4">You Won!</h2>
      <img
        src={itemImage}
        alt={winningItem.name}
        className="w-48 h-48 object-cover mx-auto rounded-lg border-4 border-yellow-500"
        onError={(e) => {
          e.target.src = getPlaceholderImage(winningItem.name);
        }}
      />
      <p className="text-2xl font-bold mt-4">{winningItem.name}</p>
    </div>
  );
}

//Generate placeholder image
const getPlaceholderImage = (name) => {
  const formattedName = name.replace(/\s/g, "+");
  return `https://placehold.co/150x150/404040/FFFFFF?text=${formattedName}`;
};

//Decision of the winner loot
const getWinner = (loots) => {
  // Sum of loots chance. Normally there was a while loop to sum but gemini changed it.
  const totalChance = loots.reduce((sum, loot) => sum + loot.chance, 0);
  if (totalChance <= 0) {
    // If division by zero, return random item
    return loots[Math.floor(Math.random() * loots.length)];
  }
  let random = Math.random() * totalChance;

  for (const loot of loots) {
    random -= loot.chance;
    if (random <= 0) {
      return loot;
    }
  }

  // Safe boat in case of rounding mistakes
  return loots[loots.length - 1];
};

//Array of items in animation
const generateReelItems = (loots, winner, length = 50, winnerIndex = 47) => {
  const reel = [];
  if (!loots || loots.length === 0) {
    // Just in case error handling
    return reel;
  }
  for (let i = 0; i < length; i++) {
    if (i === winnerIndex) {
      // Putting winner item on winning marker
      reel.push(winner);
    } else {
      // Filling random items
      reel.push(loots[Math.floor(Math.random() * loots.length)]);
    }
  }
  return reel;
};

// component for one item reel
function LootItem({ item }) {
  // Rarity decision
  const borderColor = useMemo(() => {
    if (!item || typeof item.chance === "undefined") return "border-gray-500"; // Default
    if (item.chance <= 5) return "border-red-500"; // Rarest
    if (item.chance <= 10) return "border-yellow-500";
    if (item.chance <= 15) return "border-purple-500";
    if (item.chance <= 20) return "border-blue-500";
    return "border-gray-500"; // Common
  }, [item]);

  const itemName = item ? item.name : "Unknown";
  const itemImage =
    item && item.image ? item.image : getPlaceholderImage(itemName); // Use placeholder in case of no image

  return (
    <div
      className={`flex-shrink-0 w-[150px] h-[150px] bg-gray-700 m-2 rounded-lg border-4 ${borderColor} overflow-hidden`}
    >
      <img
        src={itemImage}
        alt={itemName}
        className="w-full h-3/4 object-cover"
        // If there is no image, show placegolder
        onError={(e) => {
          e.target.src = getPlaceholderImage(itemName);
        }}
      />
      <div className="w-full h-1/4 bg-gray-800 p-1 text-center overflow-hidden">
        <p className="text-white text-xs font-bold truncate">{itemName}</p>
      </div>
    </div>
  );
}

//Modal for opening case
export default function CaseOpenModal({ caseData, handleCloseCase, balance }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);
  const [reelItems, setReelItems] = useState([]);
  const [translateX, setTranslateX] = useState(0);
  const [openWinModal, setOpenWinModal] = useState(false);
  const handleOpenWinModal = () => setOpenWinModal(true);
  const handleCloseWinModal = () => setOpenWinModal(false);

  // Create a ref to hold the looping spin Audio object
  const spinAudioRef = useRef(null);

  // Stats for reels
  const ITEM_WIDTH = 150; // width
  const ITEM_MARGIN = 8; // leaving 4 px distance between each reel
  const TOTAL_ITEM_WIDTH = ITEM_WIDTH + ITEM_MARGIN * 2;
  const WINNER_INDEX = 47; // Markers coordinate
  const REEL_LENGTH = 50;

  const [reelOffset, setReelOffset] = useState(0);
  const reelContainerRef = useRef(null);

  // Audio part
  useEffect(() => {
    spinAudioRef.current = new Audio(spinSoundUrl);
    spinAudioRef.current.loop = false; // Make the sound loop

    return () => {
      if (spinAudioRef.current && !spinAudioRef.current.paused) {
        spinAudioRef.current.pause();
        spinAudioRef.current = null;
      }
    };
  }, []); // Empty array = runs once on mount

  useEffect(() => {
    // Set initial offset on mount
    if (reelContainerRef.current) {
      const rect = reelContainerRef.current.getBoundingClientRect();
      const containerCenter = rect.width / 2;
      const itemCenter = TOTAL_ITEM_WIDTH / 2;
      const stopPosition = WINNER_INDEX * TOTAL_ITEM_WIDTH + itemCenter;
      setReelOffset(containerCenter - stopPosition);
    }
  }, []); // Empty array ensures this runs only once on mount

  const startSpin = () => {
    if (caseData.price > balance.balance) {
      alert("U poor");
      handleCloseCase();
      return;
    }
    //Just in case
    if (!caseData || !caseData.loots || caseData.loots.length === 0) {
      console.error("No loot data provided to spin.");
      return;
    }

    // Calculating the coords of the reels
    let newOffset = reelOffset; // Using prepared offset
    if (reelContainerRef.current) {
      const rect = reelContainerRef.current.getBoundingClientRect(); //Getting info about the distance between element and view
      const containerCenter = rect.width / 2;
      const itemCenter = TOTAL_ITEM_WIDTH / 2;
      const stopPosition = WINNER_INDEX * TOTAL_ITEM_WIDTH + itemCenter;
      newOffset = containerCenter - stopPosition;
      setReelOffset(newOffset); // Gemini suggested and i accepted it. This prepare next spin
    }

    // Reset part
    setWinner(null);
    setIsSpinning(true);
    setTranslateX(0); // Start from the beginning

    // Play the sound
    if (spinAudioRef.current) {
      spinAudioRef.current.currentTime = 0; // Rewind to start
      const playPromise = spinAudioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Ignore the AbortError which is the interruption warning
          if (error.name !== "AbortError") {
            console.error("Audio play failed:", error);
          }
        });
      }
    }

    // Decision of result before animating it
    const winningItem = getWinner(caseData.loots);

    // Generate spinning items
    const items = generateReelItems(
      caseData.loots,
      winningItem,
      REEL_LENGTH,
      WINNER_INDEX
    );
    setReelItems(items);

    // Start the animation (CSS transition will handle it) and also did this part gemini
    setTimeout(() => {
      // Add a small random jitter so it doesn't stop at the *exact* same pixel
      const jitter = (Math.random() - 0.5) * (TOTAL_ITEM_WIDTH * 0.4);
      setTranslateX(newOffset + jitter);
    }, 100); // Short delay to ensure state update and render

    // After animation part
    setTimeout(() => {
      setIsSpinning(false);
      setWinner(winningItem);

      if (spinAudioRef.current && !spinAudioRef.current.paused) {
        spinAudioRef.current.pause();
      }

      handleOpenWinModal(); //For opening Modal.
    }, 6000); // After animation is finished, give result after some delay
  };

  const reset = () => {
    setWinner(null);
    setReelItems([]);
    setTranslateX(0);
  };

  const closeAndReset = () => {
    reset();

    if (spinAudioRef.current && !spinAudioRef.current.paused) {
      spinAudioRef.current.pause();
    }

    if (handleCloseCase) {
      handleCloseCase();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 font-inter">
      <div className="relative w-full max-w-4xl bg-gray-800 text-white rounded-lg shadow-2xl p-6 m-4">
        {!isSpinning && (
          <button
            onClick={closeAndReset}
            className="absolute top-3 right-3 w-8 h-8 bg-red-600 rounded-full text-white font-bold text-lg flex items-center justify-center hover:bg-red-700 transition-colors"
          >
            &times;
          </button>
        )}

        <h2 className="text-3xl font-bold text-center mb-4">
          {caseData ? caseData.name : "Loading..."}
        </h2>

        <div
          ref={reelContainerRef}
          className="relative w-full h-[200px] bg-gray-900 rounded-lg overflow-hidden my-6"
        >
          <div className="absolute left-1/2 top-0 h-full w-1.5 bg-red-500 transform -translate-x-1/2 z-10 shadow-lg"></div>

          <div
            className="flex items-center h-full"
            style={{
              transform: `translateX(${translateX}px)`,
              // Use a long, custom ease-out for the spin
              transition: isSpinning
                ? "transform 5s cubic-bezier(0.1, 0.6, 0.2, 1)"
                : "none",
            }}
          >
            {reelItems.map((item, index) => (
              <LootItem key={index} item={item} />
            ))}
          </div>
        </div>

        {winner && !isSpinning && (
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <h3 className="text-2xl font-bold text-green-400">You won!</h3>
            <p className="text-xl">{winner.name}</p>
          </div>
        )}

        <div className="flex flex-col items-center mt-6">
          {!isSpinning && !winner && (
            <button
              onClick={startSpin}
              className="px-8 py-3 bg-green-600 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-green-700 transition-colors"
            >
              Open Case
            </button>
          )}
          {!isSpinning && winner && (
            <button
              onClick={closeAndReset} // For resetting the game
              className="px-8 py-3 bg-blue-600 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Okay
            </button>
          )}
        </div>
      </div>
      <Modal
        open={openWinModal}
        onClose={handleCloseWinModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* *** SOLUTION 2: Pass the 'winner' state variable as the prop ***
         */}
        <CaseWinModal
          winningItem={winner}
          handleCloseWinModal={handleCloseWinModal}
        />
      </Modal>
    </div>
  );
}
