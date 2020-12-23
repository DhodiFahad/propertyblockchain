import React from 'react'
import {useHistory} from 'react-router-dom';
const landTitles = [{titleid:'100',plotNo:290,blockNo:110,County:'Makindye',Tenure:'Mailo Land'},{titleid:'101',plotNo:490,blockNo:303,County:'Busiro',Tenure:'Mailo Land'}]

function Titles() {
    const history = useHistory();
    const handleClick = (e) => {
        history.push(`/Home/Titles:${e}`)
    }
    return (
        <div className='title'>
            {/* <h1></h1> */}
            <table className='titlesTable'>
                <tr>
                    <th>Block No</th>
                    <th>Plot No</th>
                    <th>County</th>
                    <th>Tenure System</th>
                </tr>
                {landTitles.map((title)=><tr onClick={()=>handleClick(title.titleid)} key={title.titleid}>
                    <td>{title.blockNo}</td>
                    <td>{title.plotNo}</td>
                    <td>{title.County}</td>
                    <td>{title.Tenure}</td>                    
                </tr>)}
            </table>
        </div>
    )
}

export default Titles
