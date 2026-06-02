import { isUrlOrRelativePath } from '@/utils/is-url-or-relative-path';
import sanitizeHtml from 'sanitize-html';

// getZodErrorMessages

import {z} from 'zod'

const postBaseSchema = z.object({
title:z.
    string()
    .trim()
    .min(3, "Titulo deve ter no minimo 3 caracteres")
    .max(120,"Titulo deve ter no maximo 120 caracteres"),
    content:z.string()
    .trim()
    .min(3,"Conteudo é obrigatorio")
    .transform(valor=>sanitizeHtml(valor)),
    author: z
    .string()
    .trim()
    .min(4,"Autor precisa de no minimo 4 caractere")
    .max(100,"Nome do autor nao deve ter mais de 100 caractere"),
    excerpt:z
    .string()
    .trim()
    .min(3,"Excerto precisa de nom inimo 3 caractere")
    .max(200,"Excerto não deve ter mais que 200 caractere"),
     coverImageUrl: z.string().trim().refine(isUrlOrRelativePath,{
        message:'URL da capa de ser uma URL real ou caminho para imagem',
     }),
     published:z
     .union([
        z.literal('on'),
        z.literal('true'),
        z.literal('false'),
        z.literal(true),
        z.literal(false),
        z.literal(null),
        z.literal(undefined)

     ]).default(false)
     .transform(val => val === 'on' || val === 'true' || val === true)
})

export const PostcreateSchema = postBaseSchema

export const PostUpdateSchema = postBaseSchema.extend({

})










