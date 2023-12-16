'use client';
import { useEffect, useState } from 'react';
import Article from './article';

export default function ArticleList(props) {
  const ARTICLES = props.articles;
  return (
    <div className="grid grid-cols-3 px-4">
      {ARTICLES.map((item, index) => {
        return item.btn ? (
          <div key={index} className="m-3 mt-8">
            <div className="w-80 text-white">
              <div>
                <img className="w-1/5" src={item.imgSrc} alt="" />
              </div>
              <div className="text-2xl font-semibold mt-3">{item.title}</div>
              <div className="mt-3">{item.detail}</div>
              <div className="mt-6">
                <a href="#" className="rounded-3xl bg-[#ed1c24] text-sm py-3 px-6 w-5">
                  {item.btn}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div key={index} className="m-3 mt-8">
            <Article article={item}></Article>
          </div>
        );
      })}
    </div>
  );
}
