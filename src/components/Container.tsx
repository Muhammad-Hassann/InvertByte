const Container = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div
      className={`max-w-300 mx-auto p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;