import React, { useState } from 'react'
import './App.css'

const Tree = () => {
  const [tree, setTree] = useState([
    {
      RootId: 1,
      RootValue: '',
      ChildValue: [],
    },
  ])
    console.log("main state",tree);
  const addParent = () => {
    setTree([
      ...tree,
      {
        RootId: tree.length + 1,
        RootValue: '',
        ChildValue: [],
      },
    ])
  }

  const handleChangeParent=(e,index)=>{
    setTree([tree.map((value,l)=>{
      index==l?{
        ...value,
      }
    })])
  }

  const addChild = (index) => {
    const currentTree = [...tree]
    currentTree[index].ChildValue.push('')
    setTree(currentTree)
  }

  return (
    <div>
      <button
        onClick={() => {
          addParent()
        }}
      >
        P+
      </button>
      {/* &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; */}

      {tree.map((value, index) => (
        <div id="i1">
          <div key={index}>
            <input
              type="text"
              value={value.RootValue}
              onChange={(e) =>
                // setTree([...tree], [(tree[index].RootValue = e.target.value)])
                handleChangeParent(e,index)

              }
                         
                          />
            <br />
            <br />
            <button
              onClick={() => {
                addChild(index)
              }}
            >
              C+
            </button>
            <br />
            <br />
          </div>
          {value.ChildValue.map((childvalue, childindex) => (
            <div>
              <br />
              <br />
              <input
                type="text"
                value={childvalue}
                onChange={(e) =>
                  setTree([...tree],[(tree[index].ChildValue[childindex] = e.target.value)])

                }
              />
              &nbsp;&nbsp;
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Tree
