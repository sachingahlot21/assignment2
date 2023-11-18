import React from 'react'
import { useEmp } from '../context/EmpContext'
import { useState } from 'react'
import './Appcss.css'
// import EditList from './components/EditList.jsx'

function EditEmp({singleEmp}) {
  const { deleteEmp, updateEmp } = useEmp()
  const [isEmpEditable, setIsEmpEditable] = useState(false)
  const [singleEmpName, setSingleEmpName] = useState(singleEmp.empName)
  const [singleEmpDepart, setSingleEmpDepart] = useState(singleEmp.empDepart)

  const editEmp = () => {
    updateEmp(singleEmp.id , {...singleEmp , empName:singleEmpName , empDepart:singleEmpDepart})
    setIsEmpEditable(false)
  }
  return (
    <>
      
      <div id='datadiv'>
        
        {
          
      
            <div key={singleEmp.id} className='editdiv'>
              <div>
                <input type='text'
                  id='nameoutput'
                  value={singleEmpName}
                  onChange={(e) => setSingleEmpName(e.target.value)}
                  readOnly={!isEmpEditable}
                />
              </div>
              <div>
                <select id="departments" name="departmentslist" value={singleEmpDepart} form="empDetails" onChange={(e) => setSingleEmpDepart(e.target.value)} disabled={!isEmpEditable}>
                  <option value="Finance">Finance</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Engineering">Engineering</option>
                </select>
              </div>
              <div>

                <button onClick={() => {
                  if (isEmpEditable) {
                    editEmp();
                  } else setIsEmpEditable((prev) => !prev);
                }} id='btn'>
                  {isEmpEditable ? "Save" : "Edit"}
                </button>
              </div>
              <div>
                <button onClick={() => deleteEmp(singleEmp.id)} id='btn'>
                  Delete
                </button>
              </div>
            </div>
          
        }
      </div>
    </>
  )
}

export default EditEmp