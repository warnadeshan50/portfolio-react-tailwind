function HomeBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center background m-auto">
      <div className="circle c8 rounded-full justify-center content-center ">
        <div className="circle c7 rounded-full m-auto justify-center content-center ">
          <div className="circle c6 rounded-full m-auto justify-center content-center ">
            <div className="circle c5 rounded-full m-auto justify-center content-center ">
              <div className="circle c4 rounded-full m-auto justify-center content-center ">
                <div className="circle c3 rounded-full m-auto justify-center content-center ">
                  <div className="circle c2 rounded-full m-auto justify-center content-center ">
                    <div className="circle c1 rounded-full m-auto justify-center content-center ">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBackground;
