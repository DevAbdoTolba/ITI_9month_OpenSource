#include "Article.h"
#include "Course.h"
#include "InteractiveExercise.h"
#include "Quiz.h"
#include "VideoLesson.h"
#include <iostream>

using namespace std;

int main() {

  cout << "--- Polymorphism with Learning Materials ---" << endl;

  vector<LearnningMaterial *> library;

  library.push_back(
      new VideoLesson("2025-11-20", "Deep Inheritance", 25, "1080p"));
  library.push_back(new Article("2025-11-19", "Virtual Tables Guide", 15, 10));
  library.push_back(new Quiz("2025-11-18", "OOP Checkpoint", 20, 5));

  for (size_t i = 0; i < library.size(); i++) {
    library[i]->DisplayInfo();
  }

  cout << "\n--- Evaluation Process (Evaluatable Only) ---" << endl;
  vector<Evaluatable *> exams;

  exams.push_back(new Quiz("2025-11-20", "Final Exam", 60, 50));

  for (size_t i = 0; i < exams.size(); i++) {
    exams[i]->Evaluate();
  }

  for (auto book : library)
    delete book;
  for (auto exam : exams)
    delete exam;

  cout << "\n\n\n\n\n\n\n\n";

  cout << "--- Diamond Problem & Interface Testing ---" << endl;

  VideoLesson *v = new VideoLesson("2025-11-20", "Diamond Problem Solved", 10, "4K");

  // Upcasting to Sharable
  Sharable *s = v;
  s->Share();

  delete v;

  return 0;
}
