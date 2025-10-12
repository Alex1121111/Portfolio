export default function SkillSection() {
    return (
            <div className="font-japanese relative h-screen w-full">
                {/* Top Centered Title */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                    <h1 className="text-8xl font-japanese text-center">MY SKILLS</h1>
                </div>

                {/* Top Row: Full Stack Dev & Designing */}
                <div className="absolute top-50 left-1/2 transform -translate-x-1/2 w-full flex justify-center gap-8">
                    <div className="bg-[#1d1e40] w-1/3 bg-opacity-40 text-white px-8 py-6 rounded-2xl font-semibold shadow-lg">
                        <h1 className="flex justify-center font-japanese text-red-400 text-7xl">Full Stack Dev</h1>
                        <ul className="flex flex-col items-center justify-center text-5xl text-[#eedaae]">
                            <li>Micro Services</li>
                            <li>AWS Services</li>
                            <li>Iaac</li>
                            <li>Guice</li>
                            <li>Software Infrastructure</li>
                        </ul>
                    </div>
                    <div className="bg-[#1d1e40] w-1/3 bg-opacity-40 text-white px-8 py-6 rounded-2xl font-semibold shadow-lg">
                        <h1 className="flex justify-center font-japanese text-red-400 text-7xl">Designing</h1>
                        <ul className="flex flex-col items-center justify-center text-5xl text-[#eedaae]">
                            <li>Figma</li>
                            <li>HTML 5</li>
                            <li>CSS</li>
                            <li>React JS</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Centered: Problem Solving */}
                <div className="absolute bottom-90 left-1/2 transform -translate-x-1/2 w-full flex justify-center h-1/4">
                    <div className="bg-[#1d1e40] bg-opacity-40 text-white px-8 py-6 rounded-2xl font-semibold shadow-lg w-1/3">
                        <h1 className="flex justify-center font-japanese text-red-400 text-7xl">Problem Solving</h1>
                        <ul className="flex flex-col items-center justify-center text-5xl text-[#eedaae]">
                            <li>Dynamic Programming</li>
                            <li>Prefix Trees</li>
                            <li>Dijkstra's Algorithm</li>
                            <li>Union Find</li>
                            <li>Topological Sort</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
}