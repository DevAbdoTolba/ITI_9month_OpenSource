#include <iostream>
#include "Course.h"
#include "VideoLesson.h"
#include "Article.h"
#include "Quiz.h"
#include "InteractiveExercise.h"

using namespace std;


int main() {


    cout << "--- A: Demonstrate upcasting: LearninngMaterial* ptr = new VideoLesson(...) ---" << endl;

    LearninngMaterial* ptr = new VideoLesson("Upcasted Video", 10, "720p");

    ptr->DisplayInfo();

    delete ptr;

    cout << "\n\n\n\n\n\n\n";
    cout << "--- B: Add a derived class InteractiveExercise with difficulty level ---" << endl;

    Course cppCourse("Advanced C++ Programming");

    cppCourse.AddMaterial(new VideoLesson("Intro to Polymorphism", 15, "1080p"));
    cppCourse.AddMaterial(new Article("Understanding Virtual Tables", 10, 4));
    cppCourse.AddMaterial(new VideoLesson("Deep vs Shallow Copy", 20, "4K"));
    cppCourse.AddMaterial(new Quiz("Chapter 9 Quiz", 5, 10));

    // Adding Interactive Exercise
    cppCourse.AddMaterial(new InteractiveExercise("Memory Leak Hunt", 30, "Hard"));

    cppCourse.ShowCourseContent();;

    // Will destroy after main done...

    return 1;
}


/*
 * Output:

 --- A: Demonstrate upcasting: LearninngMaterial* ptr = new VideoLesson(...) ---
 [Video] Upcasted Video (720p) - 10 mins
 Deleting Material: Upcasted Video







 --- B: Add a derived class InteractiveExercise with difficulty level ---
 --- Course Created: Advanced C++ Programming ---

 Course Content: Advanced C++ Programming
 -----------------------------------
 [Video] Intro to Polymorphism (1080p) - 15 mins
 [Article] Understanding Virtual Tables, Pages: 4, Time: 10 mins
 [Video] Deep vs Shallow Copy (4K) - 20 mins
 [Quiz] Chapter 9 Quiz, Questions: 10, Time: 5 mins
 [Exercise] Memory Leak Hunt - 30 mins
 -----------------------------------

 --- Destroying Course: Advanced C++ Programming ---
 Deleting Material: Intro to Polymorphism
 Deleting Material: Understanding Virtual Tables
 Deleting Material: Deep vs Shallow Copy
 Deleting Material: Chapter 9 Quiz
 Deleting Material: Memory Leak Hunt


 */
