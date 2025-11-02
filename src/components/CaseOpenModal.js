//i still have a road to go. This page is cooperated with Gemini.

import React, { useState, useEffect, useMemo, useRef } from "react"; // --- AUDIO: Import useRef
// import { useRouter } from "next/navigation"; // <--- This was causing the error
// Assuming CaseWinModal is in the same folder
// import CaseWinModal from "./CaseWinModal";
// NOTE: Since I can't generate multiple files, I'll create a simple
// CaseWinModal here for the code to be runnable.
import { Modal } from "@mui/material";
import { useRouter } from "next/navigation";

// --- AUDIO ---
// IMPORTANT: You must replace these with valid paths to your own sound files.
const spinSoundUrl = "/sounds/spin.mp3"; // A looping "tick" or "spin" sound
const winSoundUrl = "/sounds/success.mp3"; // A "ding" or "success" sound
// --- END AUDIO ---

// A simple placeholder for CaseWinModal so this file works
function CaseWinModal({ winningItem, onClose }) {
  // const router = useRouter(); // <--- This was part of the error

  // --- AUDIO ---
  // Create a ref for the win sound
  const winAudioRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // Load the win sound
    winAudioRef.current = new Audio(winSoundUrl);

    // Play it as soon as the modal opens
    const playPromise = winAudioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch((e) => {
        if (e.name !== "AbortError") {
          console.error("Win audio play failed:", e);
        }
      });
    }

    return () => {
      // Cleanup
      if (winAudioRef.current && !winAudioRef.current.paused) {
        // Check before pausing
        winAudioRef.current.pause();
        winAudioRef.current = null;
      }
    };
  }, []); // Empty array, runs once when modal mounts
  // --- END AUDIO ---

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

// --- Helper Functions ---

/**
 * Generates a placeholder image URL from placehold.co
 * @param {string} name - The text to display on the placeholder
 * @returns {string} - The placeholder image URL
 */
const getPlaceholderImage = (name) => {
  const formattedName = name.replace(/\s/g, "+");
  return `https://placehold.co/150x150/404040/FFFFFF?text=${formattedName}`;
};

/**
 * Picks a winner from the loots array based on weighted chance.
 * @param {Array} loots - The array of loot items with 'chance' properties.
 * @returns {Object} - The winning loot item.
 */
const getWinner = (loots) => {
  // A more robust way for floats:
  const totalChance = loots.reduce((sum, loot) => sum + loot.chance, 0);
  if (totalChance <= 0) {
    // Avoid division by zero if chances are all 0, return random item
    return loots[Math.floor(Math.random() * loots.length)];
  }
  let random = Math.random() * totalChance;

  for (const loot of loots) {
    random -= loot.chance;
    if (random <= 0) {
      return loot;
    }
  }

  // Fallback in case of rounding errors
  return loots[loots.length - 1];
};

//
// *** Removed the afterWin function from here ***
//

/**
 * Generates the array of items for the reel animation.
 * @param {Array} loots - The array of all possible loot items.
 * @param {Object} winner - The pre-determined winning item.
 *a * @param {number} length - The total number of items to put in the reel.
 * @param {number} winnerIndex - The index where the winner should be placed.
 * @returns {Array} - The generated reel items.
 */
const generateReelItems = (loots, winner, length = 50, winnerIndex = 47) => {
  const reel = [];
  if (!loots || loots.length === 0) {
    // Handle case where loots array is empty or undefined
    return reel;
  }
  for (let i = 0; i < length; i++) {
    if (i === winnerIndex) {
      // Place the winner at the designated "stop" index
      reel.push(winner);
    } else {
      // Fill other spots with random items
      reel.push(loots[Math.floor(Math.random() * loots.length)]);
    }
  }
  return reel;
};

// --- React Components ---

/**
 * A single item in the loot reel.
 */
function LootItem({ item }) {
  // Determine rarity border color based on chance
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
    item && item.image ? item.image : getPlaceholderImage(itemName); // Use actual image or fallback

  return (
    <div
      className={`flex-shrink-0 w-[150px] h-[150px] bg-gray-700 m-2 rounded-lg border-4 ${borderColor} overflow-hidden`}
    >
      <img
        src={itemImage}
        alt={itemName}
        className="w-full h-3/4 object-cover"
        // Add error fallback for image URLs (if actual image fails, show placeholder)
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

/**
 * The Modal component for opening the case.
 */
export default function CaseOpenModal({ caseData, handleCloseCase, balance }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);
  const [reelItems, setReelItems] = useState([]);
  const [translateX, setTranslateX] = useState(0);
  const [openWinModal, setOpenWinModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // --- FIX: Add error state
  const handleOpenWinModal = () => setOpenWinModal(true);
  const handleCloseWinModal = () => setOpenWinModal(false);

  // --- AUDIO ---
  // Create a ref to hold the looping spin Audio object
  const spinAudioRef = useRef(null);
  // --- END AUDIO ---

  // Constants for the reel
  const ITEM_WIDTH = 150; // width
  const ITEM_MARGIN = 8; // margin-m-2 (4px on each side)
  const TOTAL_ITEM_WIDTH = ITEM_WIDTH + ITEM_MARGIN * 2;
  const WINNER_INDEX = 47; // The item index that will land on the marker
  const REEL_LENGTH = 50;

  const [reelOffset, setReelOffset] = useState(0);
  const reelContainerRef = React.useRef(null);

  // --- AUDIO ---
  // Setup Audio object on component mount
  useEffect(() => {
    // This code only runs on the client after the component mounts
    spinAudioRef.current = new Audio(spinSoundUrl);
    spinAudioRef.current.loop = false; // Make the sound loop

    // Cleanup function: stop sound if modal is unmounted
    return () => {
      if (spinAudioRef.current && !spinAudioRef.current.paused) {
        // --- FIX
        spinAudioRef.current.pause();
        spinAudioRef.current = null;
      }
    };
  }, []); // Empty array = runs once on mount
  // --- END AUDIO ---

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
    if (!caseData || !caseData.loots || caseData.loots.length === 0) {
      console.error("No loot data provided to spin.");
      return;
    }

    // *** Recalculate offset right before spinning ***
    // This fixes bugs where window resizing breaks the alignment
    let newOffset = reelOffset; // Use existing offset as fallback
    if (reelContainerRef.current) {
      const rect = reelContainerRef.current.getBoundingClientRect();
      const containerCenter = rect.width / 2;
      const itemCenter = TOTAL_ITEM_WIDTH / 2;
      const stopPosition = WINNER_INDEX * TOTAL_ITEM_WIDTH + itemCenter;
      newOffset = containerCenter - stopPosition;
      setReelOffset(newOffset); // Update state for next time (optional, but good)
    }
    // *** END BLOCK ***

    // 1. Reset state
    setWinner(null);
    setErrorMessage(null); // --- FIX: Clear error on spin
    setIsSpinning(true);
    setTranslateX(0); // Start from the beginning

    // --- AUDIO ---
    // Play the sound
    if (spinAudioRef.current) {
      spinAudioRef.current.currentTime = 0; // Rewind to start
      // --- FIX: Handle the play promise to avoid race condition errors
      const playPromise = spinAudioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Ignore the AbortError which is the interruption warning
          if (error.name !== "AbortError") {
            console.error("Audio play failed:", error);
          }
        });
      }
      // --- END FIX
    }
    // --- END AUDIO ---

    // 2. Determine the winner *before* animation
    const winningItem = getWinner(caseData.loots);

    // 3. Generate the reel items, planting the winner
    const items = generateReelItems(
      caseData.loots,
      winningItem,
      REEL_LENGTH,
      WINNER_INDEX
    );
    setReelItems(items);

    // 4. Start the animation (CSS transition will handle it)
    setTimeout(() => {
      // Add a small random jitter so it doesn't stop at the *exact* same pixel
      const jitter = (Math.random() - 0.5) * (TOTAL_ITEM_WIDTH * 0.4);
      setTranslateX(newOffset + jitter);
    }, 100); // Short delay to ensure state update and render

    // 5. Handle animation end
    setTimeout(() => {
      setIsSpinning(false);
      setWinner(winningItem);

      // --- AUDIO ---
      // Pause the sound
      // --- FIX: Check if it's paused before pausing
      if (spinAudioRef.current && !spinAudioRef.current.paused) {
        spinAudioRef.current.pause();
      }
      // --- END FIX
      // --- END AUDIO ---

      handleOpenWinModal(); //For opening Modal.
    }, 6000); // MUST match the CSS transition duration (5s) + delay
  };

  const reset = () => {
    setWinner(null);
    setReelItems([]);
    setTranslateX(0);
  };

  const closeAndReset = () => {
    reset();
    setErrorMessage(null); // --- FIX: Clear error on close

    // --- AUDIO ---
    // Stop sound if user closes modal
    // --- FIX: Check if it's paused before pausing
    if (spinAudioRef.current && !spinAudioRef.current.paused) {
      spinAudioRef.current.pause();
    }
    // --- END FIX
    // --- END AUDIO ---

    if (handleCloseCase) {
      handleCloseCase();
    }
  };

  return (
    // Modal Backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 font-inter">
      {/* Modal Paper */}
      <div className="relative w-full max-w-4xl bg-gray-800 text-white rounded-lg shadow-2xl p-6 m-4">
        {/* Close Button */}
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

        {/* Reel Container */}
        <div
          ref={reelContainerRef}
          className="relative w-full h-[200px] bg-gray-900 rounded-lg overflow-hidden my-6"
        >
          {/* Center Marker */}
          <div className="absolute left-1/2 top-0 h-full w-1.5 bg-red-500 transform -translate-x-1/2 z-10 shadow-lg"></div>

          {/* Reel Items Wrapper */}
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

        {/* Result Message */}
        {winner && !isSpinning && (
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <h3 className="text-2xl font-bold text-green-400">You won!</h3>
            <p className="text-xl">{winner.name}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col items-center mt-6">
          {/* --- FIX: Show error message here --- */}
          {errorMessage && (
            <p className="text-red-500 font-bold text-lg mb-4">
              {errorMessage}
            </p>
          )}

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
              onClick={closeAndReset} // Changed from handleCloseCase to closeAndReset
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
        <CaseWinModal winningItem={winner} onClose={handleCloseWinModal} />
      </Modal>
    </div>
  );
}
