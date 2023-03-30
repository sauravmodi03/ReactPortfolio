import '../css/Label.scss';


function Label(props) {

    const letters = props.name.split("");
    const idName = props.name + "-label";

    const innerWidth = document.documentElement.clientWidth;
    const innerHeight = document.documentElement.clientHeight;

    document.addEventListener('scroll',function(){
        var label = document.getElementById(idName);
        const labelY = label.getBoundingClientRect().y;
        const elementHeight = label.getBoundingClientRect().height;

        if(innerHeight > labelY){
            label.style.animation = "labelSlideInTop 1s forwards";
        } 

    });

    return (
        <div id={idName} className="Label">
            {letters.map((l,i) => 
                <div key={i} className="wrapper">
                    <div key={i} className="letter">{l}</div>
                </div>
            )}
        </div>
    );
}

export default Label;