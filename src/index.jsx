import React, { useEffect , useState, Fragment} from "react";
import ReactDOM  from "react-dom/client";
function App (){
    const [name, setName] = useState ("გამარჯობა")

    useEffect(function(){
        window.alert("გვერდი ჩაიტვირთა ")
    }, [name]);
    return(
        <Fragment>
            <h1>
                {name}
            </h1>
            <button type="button" onClick={()=> setName("გვერდზე დაფიქსირდა განახლება")}>დააკლიკეთ</button>

        </Fragment>

    
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)