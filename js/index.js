// const q1 = document.querySelector(".q1"),
// 	q2 = document.querySelector(".q2"),
// 	q3 = document.querySelector(".q3"),
// 	q4 = document.querySelector(".q4"),
// 	q5 = document.querySelector(".q5"),
// 	q6 = document.querySelector(".q6");

const faqs = document.querySelector(".faqs");
const questions = faqs.children;
const state = {
  isClicked: false,
  question: document.querySelector('asdf')
}

for (let i = 0; i < questions.length; i++) {
	const components = questions[i].children;
  components[0].addEventListener("click", function() {
    const q = components[0];
		const a = components[1];

		if (state.isClicked) {
      if (state.question === questions[i]) {
				state.isClicked = false;
				state.question = null;

				q.children[0].classList.remove("select");
				q.children[1].classList.remove("up");
        q.children[1].classList.add("down");
				a.classList.add("hidden");
			} else {
				state.question.children[0].children[0].classList.remove('select');
				state.question.children[0].children[1].classList.remove("up");
				state.question.children[0].children[1].classList.add("down");
				state.question.children[1].classList.add("hidden");

				state.question = questions[i];

        q.children[0].classList.add("select");
        q.children[1].classList.remove("down");

				q.children[1].classList.add("up");
				a.classList.remove("hidden");
			}
    } else {
      q.children[0].classList.add("select");
      q.children[1].classList.remove('down');
			q.children[1].classList.add("up");
			a.classList.remove("hidden");

      state.isClicked = true;
			state.question = questions[i];
    }
  });
}
