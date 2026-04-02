export default function Home() {
  return (
    <div className="bg-green-100 w-full h-screen flex flex-col items-center p-12 font-ko">
      <h1 className="font-bold text-xl">글을 쉽게 읽을 수 있어요</h1>
      <p className="flex flex-col items-center mt-8 text-center">
        <span>이런 글을 쉽게 바꿔드립니다</span>
        <span>
          <span className="text-green-600 font-bold">사진을 넣으면</span>, 글을 쉽게 바꿔드려요
        </span>
      </p>

      <div className="flex gap-8">
        <div className="border border-green-400 rounded-2xl p-4 mt-8 w-40 bg-white flex flex-col items-center justify-center">
          <img src="/announce.png" alt="공지사항" className="w-8 h-8" />
          <span className="text-base font-Regular mt-1">안내문</span>
        </div>
        <div className="border border-green-400 rounded-2xl p-4 mt-8 w-40 bg-white flex flex-col items-center justify-center">
          <img src="/notice.png" alt="공지사항" className="w-8 h-8" />
          <span className="text-base font-Regular mt-1">공지사항</span>
        </div>
        <div className="border border-green-400 rounded-2xl p-4 mt-8 w-40 bg-white flex flex-col items-center justify-center">
          <img src="/contract.png" alt="계약서" className="w-8 h-8" />
          <span className="text-base font-Regular mt-1">계약서</span>
        </div>
        <div className="border border-green-400 rounded-2xl p-4 mt-8 w-40 bg-white flex flex-col items-center justify-center">
          <img src="/exam.png" alt="시험지" className="w-8 h-8" />
          <span className="text-base font-Regular mt-1">시험지</span>
        </div>
      </div>

      <h2 className="font-bold text-xl mt-10">사진을 넣어주세요</h2>
      <div className="border border-transparent rounded-xl bg-white w-full p-4 mt-8 flex flex-col items-center justify-center">
        <div className="border border-blue-400 border-dashed w-full h-48 rounded-xl">

        </div>
      </div>
    </div>
  );
}
