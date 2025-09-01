import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [step, setStep] = useState("welcome");
  const [partner, setPartner] = useState("");
  const [journal, setJournal] = useState("");
  const [history, setHistory] = useState([]);
  const [translation, setTranslation] = useState("");

  const handleTranslate = () => {
    const fakeResponse =
      "It sounds like you're feeling a mix of care and concern. 💙 Your words show love, even if they're wrapped in frustration.";
    setTranslation(fakeResponse);
    setHistory([...history, { text: journal, response: fakeResponse }]);
    setJournal("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="backdrop-blur-xl bg-white/40 p-8 rounded-2xl shadow-xl max-w-md w-full">
        {step === "welcome" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-3xl font-bold text-center mb-4">IKINAH</h1>
            <p className="text-center text-gray-600 mb-6 italic">
              Because Love Deserves Clarity.
            </p>
            <button
              onClick={() => setStep("choose")}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl shadow"
            >
              Get Started
            </button>
          </motion.div>
        )}

        {step === "choose" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-xl font-semibold text-center mb-4">
              Who are you?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setPartner("Partner A");
                  setStep("main");
                }}
                className="bg-rose-400 hover:bg-rose-500 text-white py-2 rounded-xl"
              >
                Partner A
              </button>
              <button
                onClick={() => {
                  setPartner("Partner B");
                  setStep("main");
                }}
                className="bg-blue-400 hover:bg-blue-500 text-white py-2 rounded-xl"
              >
                Partner B
              </button>
            </div>
          </motion.div>
        )}

        {step === "main" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-bold text-center mb-4">
              Hi {partner} 👋
            </h2>
            <textarea
              placeholder="Write your thoughts..."
              className="w-full p-3 rounded-xl border border-gray-200 mb-4"
              rows={4}
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
            />
            <button
              onClick={handleTranslate}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl shadow mb-4"
            >
              Translate Emotion 💙
            </button>

            {translation && (
              <div className="p-4 mb-4 bg-white/70 rounded-xl shadow">
                <p className="text-gray-800">{translation}</p>
              </div>
            )}

            {history.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">History</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {history.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/50 shadow-sm"
                    >
                      <p className="text-sm text-gray-600">
                        You: {item.text}
                      </p>
                      <p className="text-sm text-blue-700">
                        IKINAH: {item.response}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
