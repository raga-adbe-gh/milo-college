import { getLibs } from '../../scripts/utils.js';

export default async function init(el) {
  const titles = {...el.querySelectorAll('h1, h2, h3, h4, h5, h6, p')};
  const { createTag } = await import(`${getLibs()}/utils/utils.js`);
  const memberList = createTag('ul', {});
  const resp = await fetch('/email-list.json');
  if (!resp.ok) return;
  const json = await resp.json();
  console.log(json);
  json.data.forEach(details => {
    const person = createTag('li', {},`${details.firstName} ${details.lastName}`);
    memberList.append(person);
  });
  el.append(memberList);

}
