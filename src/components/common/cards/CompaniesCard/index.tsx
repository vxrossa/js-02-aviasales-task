import { Heading } from '../../typography';
import { StyledCompaniesCard } from './styled';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { companiesList } from '../../../../atoms/companies';
import { ICompany } from '../../../../types';
import RadioCustom from '../../checkboxes/RadioCustom';

const CompaniesCard = () => {
  const [companies, setCompanies] = useRecoilState(companiesList);

  useEffect(() => {
    const fetchCompanies = async (): Promise<ICompany[]> => {
      const response: Response = await fetch('http://localhost:5000/companies', {
        method: 'GET',
      });
      const data: ICompany[] = await response.json();
      console.log(data);
      return data;
    };

    fetchCompanies().then(data => setCompanies(data));
  }, []);

  const companiesRadioButtons = companies
    ? companies
        .map((elem: ICompany, index) => <RadioCustom key={index} id={elem.id} label={elem.name} />)
        .concat(<RadioCustom id={'all'} label="Все" checked={true} />)
        .reverse()
    : null;

  return (
    <StyledCompaniesCard>
      <Heading>Компания</Heading>
      {companiesRadioButtons}
    </StyledCompaniesCard>
  );
};

export default CompaniesCard;
