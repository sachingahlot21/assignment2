import React from 'react'
import { useEmp } from '../context/EmpContext'
function EmpList() {
  const { empData } = useEmp()

  const setId = (date) => {
    let  id = date.toString();
    let newId = id.substr(8, id.length - 1);
    return newId
  }

  return (
    <div>
<div>Employment List:</div>
      <tr>
        <th>ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
        <th>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
        <th>Department&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
      </tr>
      {
        empData.map((singleemp) => (
          <div>
            <tr>
              <td>
                {
                  setId(singleemp.id)
              }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td>{singleemp.empName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>{singleemp.empDepart}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            </tr>
          </div>
        ))
      }

    </div>
  )
}

export default EmpList