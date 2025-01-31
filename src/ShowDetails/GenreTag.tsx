function GenreTag({ tag }: { tag: string }) {
  return (
    <li className="rounded-full bg-gradient-to-r from-blue-800/80 to-indigo-900/80 px-2 py-1">
      {tag}
    </li>
  );
}

export default GenreTag;
