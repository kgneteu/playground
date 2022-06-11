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
        <div className={"cursor-crosshair h-10 w-full bg-green-500 active:skew-x-12 active:rotate-3 duration-200"}>5
        </div>
        <div
            className={"h-10 w-full bg-green-600 bg-gradient-to-r hover:from-amber-300 hover:to-amber-900 hover:shadow-lg"}>6
        </div>
    </div>
);

const ComplexGrid = () => (
    <div className="mt-8 grid grid-cols-2 auto-rows-auto sm:grid-cols-[0.5fr_1fr_2fr_2fr] gap-4 place-items-end">
        <div className={"col"}>1</div>
        <div className={"col"}>2</div>
        <div className={"col !h-32"}>3</div>
        <div className={"col !h-8 col-span-2 !w-96"}>4</div>
        <div className={"col !h-20"}>5</div>
        <div className={"col"}>6</div>
    </div>
);

function Table() {
    return (
        <table className={"m-8"}>
            <thead className={""}>
            <tr className={"relative after:w-full after:bg-green-500 after:h-1 after:absolute after:bottom-2 after:left-0"}>
                <th className={"pb-3"}>kol</th>
                <th className={"pb-3"}>kol</th>
                <th className={"pb-3"}>kol</th>
                <th className={"pb-3"}>kol</th>
            </tr>
            </thead>
            <tbody className={"outline-2 outline outline-sky-500"}>
            <tr className={"hover:bg-amber-400"}>
                <td>2</td>
                <td className={"text-center"}><div className={"-m-2 w-6 h-6 bg-green-500 rounded-full"}>3</div></td>
                <td>4</td>
                <td>5</td>
            </tr>
            <tr>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
            </tr>
            <tr>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
            </tr>
            </tbody>
        </table>
    )
}

export default function Home() {
    return (
        <div className={"container-lg"}>
            <FlexPlay/>
            <GridPlay/>
            <ComplexGrid/>
            <Table/>
        </div>
    )
}
