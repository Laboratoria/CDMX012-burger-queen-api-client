import tableImg from '../../assets/table.png'
import './tableBox.css'

export const TableBox = ({ tableObject }) => {
    let classStatus = ''
    if (tableObject.status === 'ready') {
        classStatus = "btn-table ready"
    } else {
        classStatus = "btn-table"
    }
    return (
        <>
            <button className={classStatus} id="btnTable">
                Table: {tableObject.table}
                <img src={tableImg} alt="img-table" id="imgTable" />
            </button>
        </>

    );
}

// export const TableBox = ({ tableObject }) => {
//     if (tableObject.status === 'ready') {
//         return (
//             <>
//                 <button className="btn-table ready" id="btnTable">
//                     Table: {tableObject.table}
//                     <img src={tableImg} alt="img-table" id="imgTable" />
//                 </button>
//             </>

//         );
//     } else {
//         return (
//             <>
//                 <button className="btn-table" id="btnTable">
//                     Table: {tableObject.table}
//                     <img src={tableImg} alt="img-table" id="imgTable" />
//                 </button>
//             </>

//         );
//     }
// }