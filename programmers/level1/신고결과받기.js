function solution(id_list, report, k) {
  const obj = {};

  id_list.forEach(
    (id) =>
      (obj[id] = {
        reporting: [],
        reportedBy: [],
        reported: 0,
      })
  );

  report.forEach((repo) => {
    const [ownid, badid] = repo.split(" ");
    if (!obj[badid].reportedBy.includes(ownid)) {
      obj[ownid].reporting.push(badid);
      obj[badid].reportedBy.push(ownid);
      obj[badid].reported += 1;
    }
  });

  const blacklist = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value.reported >= k) {
      blacklist.push(key);
    }
  }

  return id_list.map(
    (id) =>
      obj[id].reporting.filter((compare) => blacklist.includes(compare)).length
  );
}

function solution(id_list, report, k) {
  // 신고 횟수 정리
  const reports = [...new Set(report)].map((repo) => repo.split(" "));
  // [[ 'muzi', 'frodo' ],[ 'apeach', 'frodo' ],[ 'frodo', 'neo' ],[ 'muzi', 'neo' ],[ 'apeach', 'muzi' ]]

  const counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  // Map(3) { 'frodo' => 2, 'neo' => 2, 'muzi' => 1 }

  const good = new Map();
  for (const report of reports) {
    // 신고 당한 사람의 counts가 k보다 같거나 크면
    if (counts.get(report[1]) >= k) {
      // key : 신고한 사람, value : 이미 메일 발신 횟수 값이 있는지 확인
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  // Map(3) { 'muzi' => 2, 'apeach' => 1, 'frodo' => 1 }

  return id_list.map((a) => good.get(a) || 0);
}

const id_list = ["muzi", "frodo", "apeach", "neo"];

const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];

const k = 2;

console.log(solution(id_list, report, k));

const id_list2 = ["con", "ryan"];
const report2 = ["ryan con", "ryan con", "ryan con", "ryan con"];
const j = 3;

console.log(solution(id_list2, report2, j));
