import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [inputError, setInputError] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, { text: task.trim(), completed: false }]);
      setTask('');
      setInputError(false);
    } else {
      setInputError(true);
    }
  };

  const handleToggle = (indexToToggle) => {
    const newTasks = tasks.map((t, index) =>
      index === indexToToggle ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const handleDelete = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Box sx={{ p: 4, maxWidth: 600, margin: '0 auto', minHeight: '100vh' }}>
      <Box component="form" onSubmit={handleAddTask} sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField
          label="task"
          variant="outlined"
          fullWidth
          value={task}
          error={inputError}
          onChange={(e) => {
            setTask(e.target.value);
            if (inputError) setInputError(false);
          }}
        />
        <Button type="submit" variant="contained" startIcon={<AddIcon />} sx={{ px: 4 }}>
          Add
        </Button>
      </Box>

      <List sx={{ backgroundColor: '#fff', borderRadius: 1, boxShadow: '0px 2px 8px rgba(0,0,0,0.05)' }}>
        {tasks.length === 0 ? (
          <ListItem>
            <ListItemText primary="" sx={{ textAlign: 'center', color: '#888' }} />
          </ListItem>
        ) : (
          tasks.map((t, index) => (
            <ListItem key={index} sx={{ borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox
                  checked={t.completed}
                  onChange={() => handleToggle(index)}
                />
                <ListItemText 
                  primary={t.text} 
                  sx={{ textDecoration: t.completed ? 'line-through' : 'none', color: t.completed ? '#888' : '#000' }} 
                />
              </Box>
              <IconButton color="error" onClick={() => handleDelete(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))
        )}
      </List>
    </Box>
  );
}