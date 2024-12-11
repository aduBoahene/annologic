export function Footer() {
    return (
      <footer className="w-full py-6 bg-gray-800 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex gap-4 text-sm">
              <a className="transition-colors hover:text-white" href="#">Privacy Policy</a>
              <a className="transition-colors hover:text-white" href="#">Terms of Service</a>
            </div>
            <p className="text-sm">© 2024 Annologic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  