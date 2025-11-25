import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="hero min-h-[70vh]"
            style={{
                backgroundImage:
                    "url(/media/hero2.webp)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Nayem's Canvas</h1>
                    <p className="mb-5">
                        A simple blog website created by Nayem Ahmed. Read updated technical blog daily. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, in.
                    </p>
                    <Link href='/register' className="btn btn-primary">Create a accout</Link>
                </div>
            </div>
        </section>
    );
}