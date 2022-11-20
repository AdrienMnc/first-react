function Article(props) {

return (

<div className="article-container">

<h1>{props.title}</h1>
<p>{props.author}</p>
<p>{props.date}</p>
<p>{props.imageLink}</p>
<p>{props.content}</p>
</div>
);

}

export default Article;
