import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

function FlexPlay() {
    return (
        <div className="container bg-green-200 mx-auto p">
            <div
                className="flex flex-wrap w-full bg-amber-600 items-start h-96 content-center justify-start overflow-hidden">
                <div className="bg-blue-500 h-10 flex-1/2">1</div>
                <div className="bg-blue-500 flex-1/2">2</div>
                <div className="bg-blue-500 flex-1/2 self-end">3</div>
                <div className="bg-blue-500 h-20 flex-1/2">4</div>
                <Popup
                    trigger={<div
                        className="bg-blue-500 hover:bg-red-600 flex-1/2 cursor-pointer text-lg text-center transition duration-700 ease-in-out transform hover:scale-125 peer-hover:-skew-x-6">
                        Click me</div>} position={"center center"}>
                    <p className={"bg-amber-400 p-4 text-center"}>Hello Junior</p>
                </Popup>
            </div>
        </div>);
}


const GridPlay = () => (
    <div className="mt-8 grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className={"cursor-pointer h-10 w-full bg-green-100 active:font-bold"}>1</div>
        <div className={"cursor-cell h-10 w-full bg-green-200 active:animate-bounce"}>2</div>
        <div className={"cursor-copy h-10 w-full bg-green-300 active:animate-spin"}>3</div>
        <div className={"cursor-all-scroll h-10 w-full bg-green-400 active:animate-ping"}>4</div>
        <div className={"cursor-crosshair h-10 w-full bg-green-500 active:skew-x-12 active:rotate-3 duration-200"}>5</div>
        <div className={"h-10 w-full bg-green-600 bg-gradient-to-r hover:from-amber-300 hover:to-amber-900 hover:shadow-lg"}>6</div>
    </div>
);

export default function Home() {
    return (
        <div className={"container-lg"}>
            <FlexPlay/>
            <GridPlay/>
        </div>
    )
}
