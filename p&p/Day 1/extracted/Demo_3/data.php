<?php 
        header('Content-Type: application/json');
        $student = [
            'name' => 'ahmed',
            'age' => 20,
            'grade' => 'A'
        ];
        echo json_encode($student);