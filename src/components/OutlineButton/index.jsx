const OutlineButton = ({ children, className }) => {
  return (
    <button className={`rounded-[4px] border border-[#D9D9D9] ${className}`}>
      {children}
    </button>
  );
};

export default OutlineButton;
