import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { fetchToilets } from './api/toilets';
import './App.css'
import type { ApiResponse, Products, PaginationTypes  } from './interfaces/apiResponse';
import type { DropdownItem } from './components/dropdown/dropdown';
import ProductLayout from './components/products/productLayout';
import Dropdown from './components/dropdown/dropdown';
import Loading from './components/loading/loading';
import Pagination from './components/pagination/pagination';
import ProgressBar from './components/progressBar/progressBar';
import { SortData } from './data/sort';

interface ApiRequest {
  query?: string;
  pageNumber?: number;
  size?: number;
  sort: number;
}

function App() {
  const [products, setProducts] = useState<Products[]>([]);
  const [pagination, setPagination] = useState<PaginationTypes>({})
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [progressBar, setProgressBar] = useState<number>(30);
  const [apiRequest, setApiRequest] = useState<ApiRequest>({
    query: "toilets",
    pageNumber: 1,
    size: 30,
    sort: 1
  });

  useEffect(() => {
    fetchData();
  }, [apiRequest]);

  useLayoutEffect(() => {
    window.scrollTo(0, scrollYRef.current);
  }, [products]);

  const filterData = (data: ApiResponse) => {
    setProducts(prev => 
      apiRequest.pageNumber === 1 ?
      data.products :
      [...prev, ...data.products]
    );
    setPagination(data.pagination);
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchToilets(apiRequest);
      filterData(data);
    } catch(err: any) {
        setError(err.message ?? "There has been an error.");
    } finally {
      setLoading(false);
    }
  }

  const onSelected = async (selected: number) => {
    setProducts([]);
    setPageNumber(1);
    setProgressBar(apiRequest.size ?? 30);
    setApiRequest(prev => ({
      ...prev,
      pageNumber: 1,
      sort:selected
    }));
  }

  const onPaginationUpdate = async (pageNumber: number) => {
    rememberScroll();
    setPageNumber(pageNumber);
    setProgressBar(pageNumber * (apiRequest.size ?? 1));

    setApiRequest(prev => ({
      ...prev,
      pageNumber
    }));
  }

  const sortDropdownItems: DropdownItem[] = SortData.map(item => ({
    value: item.id,
    display: item.label,
  }));

  const hasProducts = products.length > 0;
  const scrollYRef = useRef(0);
  const rememberScroll = () => {
    scrollYRef.current = window.scrollY;
  }

  return (
    <main className="bg-gray-100 flex justify-center w-screen min-h-screen h-full">
      <section className="max-w-5xl w-full">
        <div className='flex gap-2 items-center'>
          <Dropdown options={sortDropdownItems} onChange={onSelected} selected={apiRequest.sort} />
          <span>{pagination.total} results</span>
        </div>
        { loading ? ( <Loading /> 
        ) : (
          <>
            <ProductLayout items={products} />
            {hasProducts && (
            <div className='flex flex-col gap-5 items-center py-10'>
              <ProgressBar value={progressBar} max={pagination.total ?? 0} />
              <Pagination pageNumber={pageNumber} onChange={onPaginationUpdate} isLastPage={false} />
            </div>
            )}
          </> 
        )}
      </section>
    </main>
  )
}

export default App