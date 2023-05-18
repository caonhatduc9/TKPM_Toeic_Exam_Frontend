import { Table } from 'react-bootstrap';
import style from './MyTable.module.scss';

const MyTable = ({ ...props }) => {

    const { title, data } = props;

    return <Table className={style.table} striped bordered hover>
        <thead>
            <tr>
                {title.map(item => (
                    <th>{item}</th>
                ))}

                <th></th>

            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.createdDate}</td>
                    <td>{item.modifiledDate}</td>
                    {/* <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.dob}</td> */}

                    <td>
                        <div className={style.edit}>
                            <span>Edit</span>
                        </div>
                        <div className={style.delete}>
                            <span>Delete</span>
                        </div>
                    </td>

                </tr>
            ))}
        </tbody>
    </Table>
}

export default MyTable;