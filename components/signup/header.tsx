export function Header({ activeStep }: { activeStep: number }) {
  return (
    <header className="relative h-40 w-full">
      <img
        src="https://abhigyantrips.dev/assets/background.jpg"
        alt="bg-sidebar-mobile"
        className="h-full w-full object-cover"
      />
      <div className="absolute left-0 right-0 top-6">
        <ul className=" flex items-center justify-center ">
          {[1, 2, 3].map((step, index) => (
            <li
              key={index}
              className={`mr-2 flex h-8 w-8 items-center justify-center rounded-[50%] border text-sm transition-colors duration-300  ${
                index + 1 === activeStep
                  ? 'border-white bg-white font-bold text-black'
                  : 'bg-transparent text-white'
              }  `}
            >
              {step}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
