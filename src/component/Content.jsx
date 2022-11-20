import Article from "./Article.jsx";


function Content() {
    const link1 = <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fphotos-populaire&psig=AOvVaw250vvcDdxtbfxMWPdF-t68&ust=1668686288051000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPj3o_3SsvsCFQAAAAAdAAAAABAE" alt="pouet"></img>  
    const link2 = <a href="google.fr"> 2</a>    
    const link3 = <a href="google.fr"> 3</a>    

    const lib = [
        {
            title: "Titre Un", 
            author: "Franck",
            date: "10/11/22",
            imageLink: link1, 
            content: "Lorem ipsum cifjma azdjazldknal azhodihoiafhn alzdkjlkds skldksdl"
        },

        {
            title: "Titre Deux", 
            author: "Gerard",
            date: "23/11/77",
            imageLink: link2, 
            content: "Lorem ipsum cifjma azdjazldknal azhodihoiafhn alzdkjlkds skldksdl"
        },

        {
            title: "Titre Trois", 
            author: "Emilie",
            date: "10/11/3525",
            imageLink: link3, 
            content: "Lorem ipsum cifjma azdjazldknal azhodihoiafhn alzdkjlkds skldksdl"
        }
    ]

        return (
        <div>
            {lib.map((elt) => <Article title={elt.title} author={elt.author} date={elt.date} imageLink={elt.imageLink} content={elt.content} />)}
        </div>
        );
    }

    export default Content;

