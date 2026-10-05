export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
  {/* Logo */}
  <a
  href="#"
  className="text-[21px] font-semibold tracking-[-0.04em] text-[#111512]"
>
  fermor
</a>

  {/* Desktop navigation */}
  <div className="hidden items-center gap-8 text-sm text-[#6b716c] md:flex">
    <a
      href="#product"
      className="transition hover:text-[#111512]"
    >
      Product
    </a>

    <a
      href="#how-it-works"
      className="transition hover:text-[#111512]"
    >
      How it works
    </a>

    <a
      href="#why-fermor"
      className="transition hover:text-[#111512]"
    >
      Why Fermor
    </a>
  </div>

  {/* Desktop CTA */}
  <a
    href="#get-started"
    className="hidden rounded-full bg-[#174a36] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#123d2d] hover:shadow-md md:block"
  >
    Get started
  </a>

  {/* Mobile menu */}
  <details className="relative md:hidden">
    <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-[#d9ddd7] bg-white text-[#111512]">
      <span className="sr-only">Open navigation menu</span>

      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 7H20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <path
          d="M4 12H20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <path
          d="M4 17H20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </summary>

    <div className="absolute right-0 top-12 z-50 w-56 rounded-2xl border border-[#e2e5df] bg-white p-3 shadow-[0_20px_50px_rgba(20,40,30,0.12)]">
      <a
        href="#product"
        className="block rounded-xl px-4 py-3 text-sm text-[#6b716c] transition hover:bg-[#f6f7f3] hover:text-[#111512]"
      >
        Product
      </a>

      <a
        href="#how-it-works"
        className="block rounded-xl px-4 py-3 text-sm text-[#6b716c] transition hover:bg-[#f6f7f3] hover:text-[#111512]"
      >
        How it works
      </a>

      <a
        href="#why-fermor"
        className="block rounded-xl px-4 py-3 text-sm text-[#6b716c] transition hover:bg-[#f6f7f3] hover:text-[#111512]"
      >
        Why Fermor
      </a>

      <a
        href="#get-started"
        className="mt-2 block rounded-xl bg-[#174a36] px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-[#123d2d]"
      >
        Get started
      </a>
    </div>
  </details>
</nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Hero copy */}
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#174a36]">
              Financial clarity, reimagined
            </p>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#111512] sm:text-6xl lg:text-7xl">
              Your money.
              <br />
              Finally clear.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#6b716c]">
              Fermor brings your financial life into focus — helping you
              understand where you are, make smarter decisions, and grow with
              confidence.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#get-started"
                className="rounded-full bg-[#174a36] px-7 py-3.5 text-center text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#123d2d] hover:shadow-md"
              >
                Get started
              </a>

              <a
                href="#how-it-works"
                className="rounded-full border border-[#d9ddd7] bg-white px-7 py-3.5 text-center text-sm font-medium text-[#111512] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#bfc5bd] hover:shadow-sm"
              >
                See how it works
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-[#6b716c]">
              <span className="h-2 w-2 rounded-full bg-[#174a36]" />
              Built to make financial decisions simpler
            </div>
          </div>

          {/* Financial dashboard */}
          <div className="relative">
            <div className="rounded-[2rem] border border-[#e2e5df] bg-white p-5 shadow-[0_24px_70px_rgba(20,40,30,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(20,40,30,0.12)] sm:p-7">
              {/* Dashboard header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#6b716c]">
                    Financial overview
                  </p>

                  <p className="mt-1 text-xs text-[#9a9f9a]">
                    October 2026
                  </p>
                </div>

                <div className="rounded-full bg-[#e5eee9] px-3 py-1.5 text-xs font-medium text-[#174a36]">
                  Healthy
                </div>
              </div>

              {/* Balance */}
              <div className="mt-8">
                <p className="text-sm text-[#6b716c]">Total balance</p>

                <div className="mt-2 flex items-end justify-between gap-4">
                  <p className="text-3xl font-semibold tracking-[-0.03em] text-[#111512] sm:text-4xl">
                    ₹8,42,500
                  </p>

                  <span className="pb-1 text-sm font-medium text-[#174a36]">
                    +12.4%
                  </span>
                </div>
              </div>

              {/* Chart */}
              <div className="mt-8 h-40">
                <svg
                  viewBox="0 0 600 180"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="chartFill"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#174a36"
                        stopOpacity="0.18"
                      />

                      <stop
                        offset="100%"
                        stopColor="#174a36"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 145 C60 130 80 142 125 112 C170 82 185 120 230 95 C275 70 300 105 340 76 C380 48 410 74 450 55 C500 30 540 48 600 20 L600 180 L0 180 Z"
                    fill="url(#chartFill)"
                  />

                  <path
                    d="M0 145 C60 130 80 142 125 112 C170 82 185 120 230 95 C275 70 300 105 340 76 C380 48 410 74 450 55 C500 30 540 48 600 20"
                    fill="none"
                    stroke="#174a36"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Dashboard metrics */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-[#f6f7f3] p-4">
                  <p className="text-xs text-[#6b716c]">Saved</p>

                  <p className="mt-2 text-sm font-semibold text-[#111512]">
                    ₹2.4L
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f6f7f3] p-4">
                  <p className="text-xs text-[#6b716c]">Invested</p>

                  <p className="mt-2 text-sm font-semibold text-[#111512]">
                    ₹4.8L
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f6f7f3] p-4">
                  <p className="text-xs text-[#6b716c]">Goals</p>

                  <p className="mt-2 text-sm font-semibold text-[#111512]">
                    4 / 5
                  </p>
                </div>
              </div>
            </div>

            {/* Floating insight card */}
            <div className="absolute -bottom-5 -left-4 hidden w-48 rounded-2xl border border-[#e2e5df] bg-white p-4 shadow-[0_20px_50px_rgba(20,40,30,0.1)] sm:block lg:-left-8">
              <p className="text-xs text-[#6b716c]">Fermor insight</p>

              <p className="mt-2 text-sm font-medium leading-5 text-[#111512]">
                You&apos;re on track to reach your savings goal 2 months early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understand / Act / Grow */}
      <section
        id="product"
        className="border-t border-[#e2e5df] bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#174a36]">
              One clearer financial picture
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#111512] sm:text-5xl">
              Know where you are.
              <br />
              Know what to do next.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6b716c]">
              Fermor turns scattered financial information into a clearer
              picture of your money — so every decision feels more informed.
            </p>
          </div>

          <div
            id="how-it-works"
            className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-[#e2e5df] bg-[#e2e5df] md:grid-cols-3"
          >
            {/* Understand */}
            <div className="bg-[#f6f7f3] p-8 transition-all duration-300 hover:bg-white sm:p-10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#174a36] text-sm font-medium text-white">
                01
              </span>

              <h3 className="mt-12 text-2xl font-semibold tracking-[-0.03em] text-[#111512]">
                Understand
              </h3>

              <p className="mt-4 leading-7 text-[#6b716c]">
                See your spending, savings, investments and goals in one
                simple view.
              </p>

              <div className="mt-10 h-1 w-16 rounded-full bg-[#174a36]" />
            </div>

            {/* Act */}
            <div className="bg-[#f6f7f3] p-8 transition-all duration-300 hover:bg-white sm:p-10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#174a36] text-sm font-medium text-white">
                02
              </span>

              <h3 className="mt-12 text-2xl font-semibold tracking-[-0.03em] text-[#111512]">
                Act
              </h3>

              <p className="mt-4 leading-7 text-[#6b716c]">
                Turn insights into practical next steps that fit your
                financial priorities.
              </p>

              <div className="mt-10 h-1 w-16 rounded-full bg-[#174a36]" />
            </div>

            {/* Grow */}
            <div className="bg-[#f6f7f3] p-8 transition-all duration-300 hover:bg-white sm:p-10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#174a36] text-sm font-medium text-white">
                03
              </span>

              <h3 className="mt-12 text-2xl font-semibold tracking-[-0.03em] text-[#111512]">
                Grow
              </h3>

              <p className="mt-4 leading-7 text-[#6b716c]">
                Build better financial habits and make steady progress toward
                the life you want.
              </p>

              <div className="mt-10 h-1 w-16 rounded-full bg-[#174a36]" />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Life */}
      <section
        id="why-fermor"
        className="border-t border-[#e2e5df] bg-[#f6f7f3]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#174a36]">
                Your financial life
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#111512] sm:text-5xl">
                Everything important.
                <br />
                Nothing overwhelming.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6b716c]">
                From everyday spending to long-term goals, Fermor helps you
                see the parts of your financial life that matter most.
              </p>
            </div>

            <p className="max-w-xs text-sm leading-6 text-[#6b716c]">
              A clearer view means better decisions — without needing a
              finance degree.
            </p>
          </div>

          {/* Financial cards */}
          <div className="mt-16 grid gap-5 lg:grid-cols-12">
            {/* Spending card */}
            <div className="overflow-hidden rounded-[2rem] border border-[#e2e5df] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,40,30,0.08)] lg:col-span-5 lg:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-[#6b716c]">Spending</p>

                  <p className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#111512]">
                    ₹42,680
                  </p>

                  <p className="mt-1 text-sm text-[#6b716c]">
                    spent this month
                  </p>
                </div>

                <div className="rounded-full bg-[#e5eee9] px-3 py-1.5 text-xs font-medium text-[#174a36]">
                  −8.2%
                </div>
              </div>

              {/* Spending bars */}
              <div className="mt-10 space-y-5">
                <div>
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-[#6b716c]">Housing</span>

                    <span className="font-medium text-[#111512]">
                      ₹18,400
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-[#eef0eb]">
                    <div className="h-full w-[72%] rounded-full bg-[#174a36]" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-[#6b716c]">Lifestyle</span>

                    <span className="font-medium text-[#111512]">
                      ₹11,280
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-[#eef0eb]">
                    <div className="h-full w-[48%] rounded-full bg-[#5d806f]" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-[#6b716c]">Other</span>

                    <span className="font-medium text-[#111512]">
                      ₹13,000
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-[#eef0eb]">
                    <div className="h-full w-[35%] rounded-full bg-[#a8b9af]" />
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-[#e2e5df] pt-5 text-sm text-[#6b716c]">
                Your spending is{" "}
                <span className="font-medium text-[#174a36]">
                  8.2% lower
                </span>{" "}
                than last month.
              </div>
            </div>

            {/* Savings card */}
            <div className="rounded-[2rem] border border-[#e2e5df] bg-[#174a36] p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,40,30,0.15)] lg:col-span-7 lg:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-white/65">Savings goal</p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                    Emergency fund
                  </h3>
                </div>

                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80">
                  72%
                </span>
              </div>

              <div className="mt-12">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-4xl font-semibold tracking-[-0.04em]">
                      ₹1.8L
                    </p>

                    <p className="mt-2 text-sm text-white/60">
                      of ₹2.5L target
                    </p>
                  </div>

                  <p className="text-sm text-white/60">
                    ₹70,000 to go
                  </p>
                </div>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[72%] rounded-full bg-white" />
                </div>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs text-white/55">
                    Monthly contribution
                  </p>

                  <p className="mt-2 text-sm font-medium">₹15,000</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs text-white/55">
                    Estimated completion
                  </p>

                  <p className="mt-2 text-sm font-medium">Feb 2027</p>
                </div>
              </div>
            </div>

            {/* Investment card */}
            <div className="rounded-[2rem] border border-[#e2e5df] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,40,30,0.08)] lg:col-span-7 lg:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-[#6b716c]">Investments</p>

                  <p className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#111512]">
                    ₹4,82,400
                  </p>

                  <p className="mt-1 text-sm text-[#174a36]">
                    +14.8% this year
                  </p>
                </div>

                <span className="rounded-full bg-[#e5eee9] px-3 py-1.5 text-xs font-medium text-[#174a36]">
                  Growing
                </span>
              </div>

              {/* Investment chart */}
              <div className="mt-10 h-40">
                <svg
                  viewBox="0 0 600 160"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 130 C50 125 80 110 120 115 C165 120 185 82 230 90 C275 98 300 68 345 75 C390 82 410 50 455 58 C500 66 540 35 600 18"
                    fill="none"
                    stroke="#174a36"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="600"
                    cy="18"
                    r="6"
                    fill="#174a36"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-[#e2e5df] pt-5">
                <div>
                  <p className="text-xs text-[#6b716c]">Equity</p>
                  <p className="mt-1 text-sm font-semibold">62%</p>
                </div>

                <div>
                  <p className="text-xs text-[#6b716c]">Debt</p>
                  <p className="mt-1 text-sm font-semibold">28%</p>
                </div>

                <div>
                  <p className="text-xs text-[#6b716c]">Other</p>
                  <p className="mt-1 text-sm font-semibold">10%</p>
                </div>
              </div>
            </div>

            {/* Insight card */}
            <div className="rounded-[2rem] border border-[#e2e5df] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,40,30,0.08)] lg:col-span-5 lg:p-8">
              <p className="text-sm text-[#6b716c]">Fermor insight</p>

              <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e5eee9] text-lg text-[#174a36]">
                ✦
              </div>

              <h3 className="mt-7 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#111512]">
                Small decisions can change the bigger picture.
              </h3>

              <p className="mt-4 leading-7 text-[#6b716c]">
                Fermor highlights the changes that matter so you can focus on
                decisions instead of digging through numbers.
              </p>

              <a
                href="#get-started"
                className="mt-8 inline-flex items-center text-sm font-medium text-[#174a36]"
              >
                Explore your finances
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="border-t border-[#e2e5df] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* Section heading */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#174a36]">
                Why Fermor
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#111512] sm:text-5xl">
                A better relationship
                <br />
                with your money.
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-[#6b716c]">
                Finance does not have to feel like a spreadsheet you are
                constantly trying to understand.
              </p>
            </div>

            {/* Value points */}
            <div className="divide-y divide-[#e2e5df] border-y border-[#e2e5df]">
              {/* Clarity */}
              <div className="group rounded-2xl py-8 transition-all duration-300 hover:bg-[#f6f7f3] sm:px-4 sm:py-10">
                <div className="flex gap-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e5eee9] text-sm font-medium text-[#174a36]">
                    01
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#111512]">
                      Clarity
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-[#6b716c]">
                      Bring the important parts of your financial life into
                      one clear picture, without the noise.
                    </p>
                  </div>
                </div>
              </div>

              {/* Confidence */}
              <div className="group rounded-2xl py-8 transition-all duration-300 hover:bg-[#f6f7f3] sm:px-4 sm:py-10">
                <div className="flex gap-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e5eee9] text-sm font-medium text-[#174a36]">
                    02
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#111512]">
                      Confidence
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-[#6b716c]">
                      Understand what your numbers mean so you can make
                      financial decisions with greater confidence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="group rounded-2xl py-8 transition-all duration-300 hover:bg-[#f6f7f3] sm:px-4 sm:py-10">
                <div className="flex gap-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e5eee9] text-sm font-medium text-[#174a36]">
                    03
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#111512]">
                      Progress
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-[#6b716c]">
                      Turn good intentions into visible progress toward the
                      financial goals that matter to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="get-started"
        className="bg-[#174a36] text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
              Start with clarity
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Your financial future
              <br />
              starts with understanding.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/65">
              Get a clearer picture of where you are, what matters next, and
              how you can keep moving forward.
            </p>

            <div className="mt-9">
              <a
              href="#"
              className="inline-flex rounded-full !bg-white px-7 py-3.5 text-sm font-medium !text-[#174a36] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:!bg-[#edf1ed] hover:shadow-lg"
            >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111512] text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xl font-semibold tracking-[-0.03em]">
                fermor
              </p>

              <p className="mt-2 text-sm text-white/45">
                Financial clarity for what comes next.
              </p>
            </div>

            <div className="flex gap-6 text-sm text-white/55">
              <a
                href="#product"
                className="transition hover:text-white"
              >
                Product
              </a>

              <a
                href="#how-it-works"
                className="transition hover:text-white"
              >
                How it works
              </a>

              <a
                href="#why-fermor"
                className="transition hover:text-white"
              >
                Why Fermor
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/35">
            © 2026 Fermor. Concept homepage created for frontend assignment.
          </div>
        </div>
      </footer>
    </main>
  );
}