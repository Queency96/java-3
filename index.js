const menu = [
  {
    id: 1,
    img: './images/1.jpg',
    name: 'Pounded Yam',
    desc: 'One of the world’s largest producers of yams is Nigeria, so it’s no surprise Iyan is one of those Nigerian foods that is loved so much. In fact, the saying, “yam is food and food is yam” is popular in many parts of the country.',
    category: 'food',
  },

  {
    id: 2,
    img: '../images/2.jpg',
    name: 'Beans Porridge',
    desc: 'Tons of food in Nigeria features beans due to the abundance of beans in the country. Ewa Riro is a popular dish because it packs addicting flavors and is cheap to make.',
    category: 'food',
  },

  {
    id: 3,
    img: './images/3.jpg',
    name: 'Jollof Rice',
    desc: 'When traveling in Nigeria, you can’t leave the country without trying this classic dish that is served in many West African countries. But we have to warn you! Nigeria has a friendly rivalry with Ghana about who makes Jollof rice better, so be prepared to become involved in the competition.',
    category: 'food',
  },

  {
    id: 4,
    img: './images/4.jpg',
    name: 'Beef Suya',
    desc: 'Visitors will notice this street food plenty of times while exploring casual dining in Nigeria. Thin slices of beef are marinated in an array of spices- a combination that’ll ignite your mouth. Typical spices used include roaster peanut powder, cayenne, and ginger.',
    category: 'barbecue',
  },

  {
    id: 5,
    img: './images/5.jpeg',
    name: 'Dodo (Fried Plantain)',
    desc: 'No matter the problem, plantains are the answer in Nigerian cuisine. It doesn’t matter if they’re fried, grilled, or dried.',
    category: 'snacks',
  },
  {
    id: 6,
    img: './images/6.jpg',
    name: 'Egusi Soup',
    desc: 'If you’re looking for something to warm your soul and fill your stomach, this soup is the dish for you. It’s a one-pot meal that’s easy to make and loved by all. When eating Egusi soup, you’ll typically eat it with popular swallows such as Fufu or Eba. Some people even serve it over rice.',
    category: 'soup',
  },
  {
    id: 7,
    img: './images/7.jpeg',
    name: 'Egg Rolls',
    desc: 'When we think of egg rolls, we think of the delicious Asian dish. We don’t want to create any competition between the two, but you should definitely check out Nigerian egg rolls while on your trip. In Nigeria, this dish is much more literal. It’s a boiled chicken egg that’s been covered in batter and fried.',
    category: 'snacks',
  },
  {
    id: 8,
    img: './images/8.jpeg',
    name: 'Puff Puff',
    desc: 'If you’re wanting another fried delicacy of Nigeria, check out Puff Puff. It’s nothing fancy, but it’ll sure make your mouth water. To compare it to something American, think of a donut or a beignet you found in New Orleans. (Yes, I know beignets are French!)',
    category: 'snacks',
  },
  {
    id: 9,
    img: './images/9.jpeg',
    name: 'Agege Bread',
    desc: 'Agege bread is white bread but is much denser than what Americans use to make sandwiches. The name comes from a town named Agege, and this town used to be the only known site of a wholesale bakery that made and distributed this type of bread. ',
    category: 'food',
  },
  {
    id: 10,
    img: './images/10.jpg',
    name: 'Ogbono Soup',
    desc: 'This soup might surprise you with its texture, but we promise you’ll enjoy it. Ogbono soup is a slippery draw soup made with blended Ogbono seeds. Ogbono translates to mango! Southeastern Nigeria is popular for this type of soup, but you’ll also find it in the southwest region. No matter where you eat it, you’ll be getting tons of nutrients such as proteins, fibers, healthy fats, and calcium. ',
    category: 'soup',
  },
];

const listDiv = document.getElementById('menu-items');
const uniqueBtnCont = document.getElementById('unique-btn');


window.addEventListener('DOMContentLoaded', function () {
  displayListItems(menu);
  const categories = menu.reduce(
    (total, item) => {
      if (!total.includes(item.category)) {
        total.push(item.category);
      }
      return total;
    },
    ['all']
  );
  const uniqueBtn = categories
    .map((category) => {
      return `<button
    type="button"
    class="btn btn-outline-secondary filter-Btn"
    data-id=${category}
  >
    ${category}
  </button>`;
    })
    .join(' ');
  uniqueBtnCont.innerHTML = uniqueBtn;
  const filterBtn = document.querySelectorAll('.filter-Btn');
  filterBtn.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        displayListItems(menu);
      } else {
        displayListItems(menuCategory);
      }
    });
  });

  function displayListItems(listItem) {
    let displayMenu = listItem.map((list) => {
      return `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 g-2" style="object-fit: cover; overflow: hidden;">
        <div class="card d-flex">
          <div class="card-img" >
            <img class="w-100" src=${list.img} alt="title">
          </div>
          <div class="card-body bg-body-secondary">
            <h3 class="card-title">${list.name}</h3>
            <p class="card-text desc">${list.desc}</p>
          </div>
        </div>
      </div>`;
    });
    displayMenu = displayMenu.join(' ');
    listDiv.innerHTML = displayMenu;
  }
});
