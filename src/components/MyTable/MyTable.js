import { Table } from 'react-bootstrap';
import style from './MyTable.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyTable = ({ ...props }) => {

    const { title, data, type,handleDelete } = props;
    const navigate = useNavigate();


    const row = (item, index) => {
        if (type == "managetest")
            return (<><td onClick={() => { navigate('/') }}>{index + 1}</td><td>{item.name}</td><td>{item.description}</td><td>{item.createAt}</td><td>{item.updateAt}</td>
                {/* <td>
                    <div className={style.delete} onClick={() => { handleDelete(item.name) }}>
                        <span>Delete</span>
                    </div>
                </td> */}
            </>)
        else if (type == "manageuser")
            return (<><td>{item.id}</td><td>{item.username}</td><td>{item.email}</td><td>{item.phone}</td><td>{item.dob}</td>
            {/* <td>
                <div className={style.delete} onClick={() => { handleDelete(item.id) }}>
                    <span>Delete</span>
                </div>
            </td> */}
            </>)
        else if (type == "manageblog")
            return (<><td>{item.id}</td><td className={style.blog} onClick={()=>{navigate('/blog/'+item.id)}}>{item.title}</td><td>{item.createAt}</td><td>{item.updatedAt}</td>
                <td>
                    <div className={style.delete} onClick={() => { handleDelete(item.id) }}>
                        <span>Delete</span>
                    </div>
                </td>

            </>)
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