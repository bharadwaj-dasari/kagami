const BehaviorCard = ({ number, title, comment, active = false }) => {
  return (
    <div className="bg-[#1A1A22] rounded-2xl p-4 flex items-center gap-5 border border-white/5 hover:border-white/10 transition-colors">
      <div className="font-space text-4xl font-bold text-white leading-none">
        {number}
      </div>
      <div>
        <h4 className="font-inter font-bold text-white text-lg leading-tight">{title}</h4>
        <div className="flex items-center gap-2 mt-1">
          {/* Indicator Dot */}
          <div className={`w-2 h-2 rounded-full ${active ? 'bg-[#3DDC97]' : 'bg-yellow-500'}`} />
          <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">{comment}</span>
        </div>
      </div>
    </div>
  );
};

export default BehaviorCard;