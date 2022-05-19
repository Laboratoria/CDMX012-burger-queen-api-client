import tableImg from '../../assets/table.png'
import './tableBox.css'

export const TableBox = () => {
    return (
        <>
            <button className="btn-table" id="btnTable">
                Table 5
                <img src={tableImg} alt="img-table" id="imgTable" />
            </button>
        </>
    );
}