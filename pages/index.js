
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container } from '@mui/material'
import { changeData } from '../redux/slices/data'
import generateData from '../utils/generateTest'
import data from '../test'

function Home() {
  const { listData } = useSelector(state => state.data)
  useEffect(() => {
    const result = data.map((item, i) => generateData(item, i))
    changeData(result)
  }, [])
  return (
    <Container>
      {listData.map((item, i) => (
        <div style={styles.textParent} key={i}>
          {item.map((children, j) => (
            <span style={styles.textChildren} key={j}>{children}</span>
          ))}
        </div>
      ))}
    </Container>
  )
}

const styles = {
  paper: {
    padding: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    display: 'flex',
  },
  marginRight: {
    marginRight: 2
  },
  marginBottom: {
    marginBottom: 2
  },
  cursor: {
    cursor: 'pointer'
  },
  textParent: {
    marginBottom: 10
  },
  textChildren: {
    marginRight: 3
  }
}

export default Home
