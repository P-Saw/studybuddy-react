import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';

export const handlers = [
  rest.get('/studentssearch/:search', (req, res, ctx) => {
    if (req.params.search) {
      const filteredStudents = students.filter((student) => student.name.toLowerCase().includes(req.params.search.toLowerCase()));
      return res(
        ctx.status(200),
        ctx.json({
          students: filteredStudents,
        })
      );
    } else {
      return [];
    }
  }),
  rest.get('/groups', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        groups,
      })
    );
  }),
  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group) {
      const matchingStudents = students.filter((student) => student.group === req.params.group);
      return res(ctx.status(200), ctx.json({ students: matchingStudents }));
    }

    return res(ctx.status(200), ctx.json({ students }));
  }),
];
