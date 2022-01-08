export default function Results({image,name,link,category}){
    return(
        <div style={{display:'flex',gap:'20px',padding:'20px',border:'1px solid black',margin:'10px auto', width:'800px'}}>
            <div style={{width:'200px',height:'200px'}}>
                <img width='200px' height='200px' src={image} alt='food.png'/>
            </div>
            <div>
                <h2>{name}</h2>
                <h3>Category: {category}</h3>
                <h4>Link: {link}</h4>
            </div>
        </div>
    )
} 