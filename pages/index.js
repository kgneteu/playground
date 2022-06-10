import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

function FlexPlay() {
    return (<div className="container bg-green-200 mx-auto">
            <div className="flex flex-wrap w-full bg-amber-600 items-start h-96 content-center justify-start">
                <div className="bg-blue-500 h-10 flex-1/2">1</div>
                <div className="bg-blue-500 flex-1/2">2</div>
                <div className="bg-blue-500 flex-1/2 self-end">3</div>
                <div className="bg-blue-500 h-20 flex-1/2">4</div>
                <Popup
                    trigger={<div className="bg-blue-500 hover:bg-red-600 flex-1/2 cursor-pointer text-lg text-center animate-pulse">
                        Click me</div>} position={"center center"}>
                    <p className={"bg-amber-400 p-4"}>Hello Junior</p>
                </Popup>
            </div>
        </div>);
}


export default function Home() {
    return (<FlexPlay/>)
}
