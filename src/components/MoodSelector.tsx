
import { Card } from "@/components/ui/card";

interface MoodSelectorProps {
  selectedMood: string;
  onMoodSelect: (mood: string) => void;
}

const moods = [
  { id: "confident", name: "Confident", emoji: "💪", color: "from-red-400 to-orange-400", description: "Bold and powerful outfits" },
  { id: "relaxed", name: "Relaxed", emoji: "😌", color: "from-blue-400 to-cyan-400", description: "Comfortable and easy-going" },
  { id: "romantic", name: "Romantic", emoji: "💕", color: "from-pink-400 to-rose-400", description: "Soft and elegant styles" },
  { id: "professional", name: "Professional", emoji: "👔", color: "from-gray-500 to-slate-600", description: "Polished and sophisticated" },
  { id: "adventurous", name: "Adventurous", emoji: "🌟", color: "from-green-400 to-emerald-400", description: "Unique and daring looks" },
  { id: "playful", name: "Playful", emoji: "🎨", color: "from-purple-400 to-violet-400", description: "Fun and colorful pieces" },
];

export const MoodSelector = ({ selectedMood, onMoodSelect }: MoodSelectorProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        How are you feeling today?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {moods.map((mood) => (
          <Card
            key={mood.id}
            className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              selectedMood === mood.id 
                ? 'ring-2 ring-purple-500 shadow-lg scale-105' 
                : 'hover:shadow-md'
            }`}
            onClick={() => onMoodSelect(mood.id)}
          >
            <div className={`bg-gradient-to-br ${mood.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
              <span className="text-2xl">{mood.emoji}</span>
            </div>
            <h3 className="font-semibold text-center text-gray-800 mb-2">{mood.name}</h3>
            <p className="text-xs text-gray-600 text-center">{mood.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
