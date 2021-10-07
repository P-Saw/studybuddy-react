import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';

export const handlers = [
  rest.get('/students/search/:query', (req, res, ctx) => {
    if (req.params.query) {
      const filteredStudents = students.filter((student) => student.name.toLowerCase().includes(req.params.query.toLowerCase()));
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

  rest.get('/groups/:id', (req, res, ctx) => {
    if (req.params.id) {
      const matchingStudents = students.filter((student) => student.group === req.params.id);
      return res(ctx.status(200), ctx.json({ students: matchingStudents }));
    }

    return res(ctx.status(200), ctx.json({ students }));
  }),

  rest.get('/students/:id', (req, res, ctx) => {
    if (req.params.id) {
      const matchingStudent = students.find((student) => student.id === req.params.id);
      if (!matchingStudent) {
        return res(ctx.status(404), ctx.json({ error: 'No matching student' }));
      }
      return res(ctx.status(200), ctx.json({ students: matchingStudent }));
    }

    return res(ctx.status(200), ctx.json({ students }));
  }),
];
