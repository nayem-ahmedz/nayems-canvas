import Image from "next/image";

export default function Logo(){
    return(
        <>
            <Image src='/media/logo.webp' alt='nayems canvas logo' width={200} height={200} className='w-10' />
            <h2>Nayem's Canvas</h2>
        </>
    );
}