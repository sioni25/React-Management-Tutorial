import './App.css';
import Customer from './components/Customer';
import { Fab, Paper, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import FavoriteIcon from '@mui/icons-material/Favorite';

// 스타일 적용 방식 2 => styled API (MUI v5 권장 방식)
const StyledTable = styled(Table)`
  min-width: 500px;
`;

const StyledPaper = styled(Paper)`
  width: 100%;
  margin-top: 24px;
  overflow-x: auto;
`;


const customers = [
  {
  'id': 1,
  "image": 'https://placeimg.com/32/32/any',
  'name': '홍길동',
  'age': '23',
},
{
  'id': 2,
  "image": 'https://placeimg.com/32/32/any',
  'name': '고객2',
  'age': '55',
},
{
  'id': 3,
  "image": 'https://placeimg.com/32/32/any',
  'name': '고객3',
  'age': '255',
},
]
function App() {
  return (
    <StyledPaper>
      <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>나이</TableCell>
        </TableRow>
      </TableHead>

        <TableBody>
      {
        customers.map(c => {
          return (
              <Customer 
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                age={c.age}
            />
          );
        })
      }
      </TableBody>
      </StyledTable>

{/* 머터리얼 디자인에서 버튼 적용해봄 */}
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab size="small" color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
      <Fab variant="extended">
        전송
      </Fab>

      <Button variant="contained" color="primary">
        클릭하세요
      </Button>
      </StyledPaper>
    );
}

export default App;
