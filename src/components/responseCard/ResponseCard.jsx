export function ResponseCard({
    data = "",
    className = "",
    onClick,
    popUp = false,
  }) {
    return (
      <>
        {popUp && (
          <div className="">
            <div className="">
              <div className={className}>
                <p className="">{data}</p>
                <button
                  type="button"
                  onClick={onClick}
                  className=""
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  };
