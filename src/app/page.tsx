import Sidebar from "../widgets/Sidebar";
import Search from "../widgets/Search";
import Carusel from "../widgets/carusel/Carusel";
import CardOfProduct from "../widgets/CardOfProduct";


export default function Home() {
    return (
        <main>
            <div className={'mt-5'}/>
            <div className={'w-full md:w-full lg:w-[70%] m-auto'}>
                <Search/>
                <div className={'mt-5 md:mt-10'}/>
                <Carusel/>
            </div>
            <div className={'mt-5 md:mt-10'}/>
            <CardOfProduct/>
        </main>
    );
}
