import { Table } from 'react-bootstrap';
import style from './MyTable.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

const MyTable = ({ ...props }) => {

    const { title, data } = props;
    const { type } = useParams("");
    const navigate = useNavigate();
    const row = (item, index) => {
        if (type == "managetest")
            return (<><td>{index + 1}</td><td>{item.name}</td><td>{item.createdDate}</td><td>{item.modifiledDate}</td><td>
                {/* <div className={style.edit}>
                    <span>Edit</span>
                </div> */}
                <div className={style.delete}>
                    <span>Delete</span>
                </div>
            </td></>)
        else if (type == "manageuser")
            return (<><td>{item.id}</td><td>{item.username}</td><td>{item.email}</td><td>{item.phone}</td><td>{item.dob}</td></>)
        else if (type == "manageblog")
            return (<><td>{index + 1}</td><td className={style.blog} onClick={() => { navigate("/blog/" + item.id) }}>{item.name}</td><td>{item.date}</td><td>{item.watch}</td><td>
                {/* <div className={style.edit}>
                    <span>Edit</span>
                </div> */}
                <div className={style.delete}>
                    <span>Delete</span>
                </div>
            </td></>)
    }

    return <Table className={style.table} striped bordered hover>
        <thead>
            <tr>
                {title.map(item => (
                    <th>{item}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    {row(item, index)}

                </tr>
            ))}
        </tbody>
    </Table>
}

export default MyTable;