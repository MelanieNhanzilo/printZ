export default function Saldo() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 w-screen">
            <div className="w-full max-w-md p-6">
                <h1 className="text-2xl font-bold mb-2 text-center">Saldo</h1>
            </div>
            <div className="flex items-center justify-center border border-black rounded-full size-60 mt-20">
                <p className="text-5xl">1000.00 <span className="font-normal text-lg">.MT</span></p>
            </div>
        </div>
    )
}