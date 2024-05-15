import mongoose from 'mongoose';

const { DB: DBname } = process.env && process.env

export const connect = async () => {
    try {
        mongoose.connect(DBname)
            .then(() => {
                console.log("Database connected!");
            })
    } catch (err) {
        console.error("Something went wrong connecting to database");
        console.error(err);
    }
}

// DBmodels
connect()


import user from "@/models/user";
export const User = user

import posts from "@/models/posts";
export const Posts = posts

import menu from "@/models/menu";
export const Menu = menu

import certificates from "@/models/Certificates";
export const Certificates = certificates

import userev from "@/models/userev";
export const Userev = userev

