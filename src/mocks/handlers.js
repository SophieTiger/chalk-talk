import { rest } from "msw";

const baseURL = "https://chalk-talk-api-7f804e82f4b9.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            "pk": 10,
            "username": "Toomy",
            "email": "tommy@email.se",
            "first_name": "",
            "last_name": "",
            "profile_id": 10,
            "profile_image": "https://res.cloudinary.com/diryrandw/image/upload/v1/media/images/pop_ibizdp"
        }
        ));
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    })
];